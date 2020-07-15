# 遇到的问题

### 在命令行输入 gitbook 后报错：

```shell
无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\gitbook.ps1,因为在此系统上禁止运行脚本
```

解决方法：

- 以管理员身份运行命令行如 PowerShell 等
- 在命令行输入 `set-ExecutionPolicy RemoteSigned`
- 输入选择 `Y` 即可

### gitbook导出本地html无法跳转

- 在_book文件夹中找到gitbook->theme.js文件
- 在代码中搜索

```css
 ... if(m)for(n.handler&& ....
```

将`if(m)`改成 `if(false)` ，再重新打开index.html即可。

