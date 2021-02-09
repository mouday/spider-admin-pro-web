echo '开始打包...'

npm run build:prod && \

echo '打包完成！'

# 静态文件
rsync -r ./dist/* root@39.97.246.76:/opt/spider-admin-pro/spider_admin_pro/web/public

echo '静态文件部署完成！'

echo "********************************************"
echo "*      部署完成                             *"
echo "*      http://39.97.246.76:5005/           *"
echo "********************************************"

