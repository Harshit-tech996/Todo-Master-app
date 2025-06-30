const {
  createApp
} = Vue;

createApp({
  data() {
    return {
      todos: [],
      newTodo: '',
      loading: false,
      error: null
    };
  },
  computed: {
    completedCount() {
      return this.todos.filter(todo => todo.completed).length;
    },
    pendingCount() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    async loadTodos() {
      this.loading = true;
      try {
        const response = await fetch('http://localhost:3000/api/todos');
        if (!response.ok) {
          throw new Error('Failed to load todos');
        }
        this.todos = await response.json();
        this.error = null;
      } catch (error) {
        console.error('Error loading todos:', error);
        this.error = 'Failed to load todos. Make sure the backend server is running.';
      } finally {
        this.loading = false;
      }
    },

    async addTodo() {
      if (this.newTodo.trim()) {
        try {
          const response = await fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              text: this.newTodo.trim()
            })
          });

          if (!response.ok) {
            throw new Error('Failed to add todo');
          }

          const todo = await response.json();
          this.todos.push(todo);
          this.newTodo = '';
          this.error = null;
        } catch (error) {
          console.error('Error adding todo:', error);
          this.error = 'Failed to add todo. Please try again.';
        }
      }
    },

    async toggleTodo(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'PUT'
        });

        if (!response.ok) {
          throw new Error('Failed to update todo');
        }

        const updatedTodo = await response.json();
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
        }
        this.error = null;
      } catch (error) {
        console.error('Error toggling todo:', error);
        this.error = 'Failed to update todo. Please try again.';
      }
    },

    async deleteTodo(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete todo');
        }

        this.todos = this.todos.filter(t => t.id !== id);
        this.error = null;
      } catch (error) {
        console.error('Error deleting todo:', error);
        this.error = 'Failed to delete todo. Please try again.';
      }
    },

    clearError() {
      this.error = null;
    }
  }
}).mount('#app');