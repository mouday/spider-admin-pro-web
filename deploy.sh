# rm -rf ./dist && \

npm run build:prod && \

# 拷贝静态文件

cp -r ./dist/* ../spider_admin_server/spider_admin_pro/web/public

echo '部署完成'
echo '**************************************'
echo '    http://127.0.0.1:5000             '
echo '**************************************'
