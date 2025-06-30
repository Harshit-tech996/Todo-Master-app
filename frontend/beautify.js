const beautify = require('js-beautify').js;
const fs = require('fs');
const path = require('path');

// Example usage of js-beautify
function beautifyCode(code) {
    return beautify(code, {
        indent_size: 2,
        space_in_empty_paren: true,
        preserve_newlines: true,
        max_preserve_newlines: 2,
        brace_style: 'collapse',
        keep_array_indentation: false,
        break_chained_methods: false,
        indent_scripts: 'normal',
        unescape_strings: false,
        wrap_line_length: 0
    });
}

// Example: Beautify the app.js file
function beautifyAppJs() {
    try {
        const appJsPath = path.join(__dirname, 'app.js');
        const code = fs.readFileSync(appJsPath, 'utf8');
        const beautifiedCode = beautifyCode(code);
        
        // Write back the beautified code
        fs.writeFileSync(appJsPath, beautifiedCode);
        console.log('✅ app.js has been beautified!');
    } catch (error) {
        console.error('❌ Error beautifying app.js:', error.message);
    }
}

// Example: Beautify the server.js file
function beautifyServerJs() {
    try {
        const serverJsPath = path.join(__dirname, '..', 'backend', 'server.js');
        const code = fs.readFileSync(serverJsPath, 'utf8');
        const beautifiedCode = beautifyCode(code);
        
        // Write back the beautified code
        fs.writeFileSync(serverJsPath, beautifiedCode);
        console.log('✅ server.js has been beautified!');
    } catch (error) {
        console.error('❌ Error beautifying server.js:', error.message);
    }
}

// Example usage
console.log('🎨 js-beautify Demo');
console.log('==================');

const uglyCode = `
function hello(){console.log("Hello World");}
const obj={name:"John",age:30};
if(true){console.log("This is ugly code");}
`;

console.log('\n📝 Original (ugly) code:');
console.log(uglyCode);

const beautifulCode = beautifyCode(uglyCode);

console.log('\n✨ Beautified code:');
console.log(beautifulCode);

// Beautify actual project files
console.log('\n🔧 Beautifying project files...');
beautifyAppJs();
beautifyServerJs();

console.log('\n🎉 js-beautify demo completed!');
console.log('\nTo use js-beautify in your workflow:');
console.log('1. Run: npm run beautify');
console.log('2. Or use the beautifyCode() function in your scripts'); 