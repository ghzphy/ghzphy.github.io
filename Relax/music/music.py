import os

f2 = open('test.txt','w')
files = os.listdir('D:\\文档\\Github\\ghzphy.github.io\\Relax\\music\\music_files\\')
file_list = []
files.sort()
print(len(files),files)
files.remove('新建文件夹')
num = 0
f2.write('<tr>\n')
for file in files:
    num += 1
    name = file.strip('.mp3').split('_')[-1]
    f2.write('<td>{0:}{1:}\n\t<audio controls="controls">\
             \n\t<source src="./music_files/{2:}" type="audio/mp3" />\
             \n\t<embed height="100" width="100" src="./music_files/{2:}" />\
             \n</audio>\n</td>\n'.format('&nbsp;'*(7-len(name)),name,file))
    if num%3 ==0 : f2.write('</tr>\n\n<tr>\n')

f2.close()
