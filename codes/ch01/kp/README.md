# kp

kp is a tool for kill process by server port. only use for mac && linux

## Install

    [sudo] np install -g kp

## Usage

default server port is 3000

> kp

or kill by some port

> kp 3002

or with sudo

> kp 3002 -s or kp 3002 --sudo

## Code

kill by some port

    #!/user/bin/env node
    
    var kp = require("kp")
    kp(3980)

or

kill by some port with sudo

    #!/user/bin/env node

    var kp = require("kp")
    kp(3980, 'sudo')

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.1.0 实现可编程调用
- v1.0.0 初始化版本CLI，实现 kp 导出

## 欢迎 fork 和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在 issue 提问或发送邮件

## License

this repo is released under the [MIT License](http://www.opensource.org/licenses/MIT). 
