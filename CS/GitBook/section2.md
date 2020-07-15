## 命令

**初始化** 新建一个文件夹，例如新建 mygitbook ，然后在该目录下执行命令：

```shell
gitbook init
```

会自动生成两个必要的文件 README.md 和 SUMMARY.md。

**预览** 执行命令：

```shell
gitbook serve
```

gitbook会启动一个4000端口用于预览，可以在浏览器打开网址： [http://localhost:4000](http://localhost:4000/) 预览效果。

**编译** 执行命令：

```shell
gitbook build
```

运行该命令后会在根文件夹生成一个 book 文件夹，包含了书籍的所有 html 文件. 可以使用该命令来生成网页而不开启服务器，也可以将_book文件夹部署到服务器上。



### GitBook 命令

这里将介绍GitBook的一些命令

**输出gitbook的帮助信息**

```shell
gitbook --help
```

**生成静态网页并运行服务器**

```shell
gitbook serve
```

**生成静态网页**

```shell
gitbook build
```

**生成静态网页时指定gitbook的版本，如果本地没有将先下载**

```shell
gitbook build --gitbook=3.2.3
```

**列出所有的gitbook版本**

```shell
gitbook ls
```

**列出远程可用的gitbook版本**

```shell
gitbook ls-remote
```

**更新到gitbook的最新版本**

```shell
gitbook update
```

**卸载对应的gitbook版本**

```shell
gitbook uninstall 3.2.3
```

**安装依赖**

```shell
gitbook install
```

**指定log的级别**

```shell
gitbook build --log=debug
```

**输出错误信息**

```shell
gitbook builid --debug
```

