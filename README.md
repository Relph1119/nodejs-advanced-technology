# 狼书第3卷《Node.js 高级技术》代码示例

&emsp;&emsp;狼书第3卷《Node.js 高级技术》这本书主要以Node.js高级技术为核心，讲解了npm模块的开发流程和示例；还介绍了基于Koa框架构建的blog项目示例，通过自建模块的使用，优化代码结构；通过对架构演变，讲解Node.js微服务的构建流程与示例；基于阿里云的服务部署，介绍了手动/自动部署流程、APM监控等，基于Easy-Monitor的性能监控与调优方案；讲解TDD、BDD测试流程，并介绍最小化问题、保证质量、便于重构的三个核心原则，演示基于Cucumber框架的BDD流程，并简要讲解了TypeScript的内容。

## 运行环境

### 环境版本

- Node.js版本：16.1.0

## 项目结构
<pre>
codes--------------------------------------代码
+---ch01---------------------------------------第1章自己动手写npm模块
+---ch02---------------------------------------第2章自己动手编写企业级Web开发框架
+---ch03---------------------------------------第3章构建具有Node.js特色的服务
+---ch04---------------------------------------第4章服务器部署与性能调优
+---ch05---------------------------------------第5章测试、开源与自学
</pre>

## 代码问题
1. P183：由于seneca版本更新，消息添加的方法应改为`bind`，消息调用的方法应改为`use`
2. P272：由于tap版本更新，使用`not`代替`notEqual`方法，使用`match`代替`similar`方法
3. P287：由于chromedriver的版本问题，仅支持Chrome v109版本，需要降级使用

## 学习总结

&emsp;&emsp;笔者学完这本书之后，对Node.js的开发、测试、部署全流程有了更深的了解，结合第2卷的Web应用开发，了解了Node.js高级技术中的各种模块使用。

&emsp;&emsp;本书的缺点很多：
1. 缺少项目代码，对初学者来说，需要手敲代码。
2. 在第2章的代码中，由于书中介绍的项目代码不全，可能无法和书中的运行结果一致
3. 在第3章的代码中，书中无法完整提供项目代码，无法实现延时加载的结果，无法正常运行。
4. 第4章主要是在阿里云部署的介绍，需要自己搭建
5. 在第5章的代码中，笔者没有执行TypeScript与Node.js的集成示例。
