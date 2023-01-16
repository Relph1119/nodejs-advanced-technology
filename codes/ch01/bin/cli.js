/**
 * @author: HuRuiFeng
 * @file: cli.js
 * @time: 2023/1/13 16:17
 * @project: nodejs-advanced-technology
 * @desc: P11 基于process.argv实现命令行参数
 */
const argv = process.argv;
argv.shift()

const file_path = __dirname;
const current_path = process.cwd();

for (let i in argv) {
    let _argv = argv[i];
    if (_argv === '-h' || _argv === '--help') {
        console.log('this is help info')
    }
}
