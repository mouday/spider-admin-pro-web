# npm run build:prod && \


# 拷贝静态文件
cp -r ./dist/* ../spider_admin_server/spider_admin_pro/web/public
# cp -r ./dist/index.html ../spider_admin_server/spider_admin_pro/web/static && \


echo '部署完成'
echo '**************************************'
echo '    http://127.0.0.1:5000             '
echo '**************************************'
