with open('./gitbook/theme.js','r',encoding='utf-8') as f:
	content = f.read()
print(content)
content = content.replace('f(m)','f(false)')

with open('./gitbook/theme.js','w',encoding='utf-8') as f:
	f.write(content)