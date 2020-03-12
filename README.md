# Laravel-VUE-Admin

### 安装
* 添加提供者到config/app.php。

```php
'providers' => [

    ...

    Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
    Spatie\Permission\PermissionServiceProvider::class,
    Jmhc\Admin\AdminServiceProvider::class,
]
```
* 发布资源

```bash
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

// 这一行命令会覆盖routes/api.php和 RouteServiceProvider.php
php artisan vendor:publish --provider="Jmhc\Admin\AdminServiceProvider" --force
```

* 迁移数据
```bash
php artisan migrate
```

* 生成jwt秘钥
```bash
php artisan jwt:secret
```
### 配置
* 配置好数据库账号和密码，在.env中进行配置。
```.dotenv
...
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=123456
...
```
* 配置config/auth.php
```php
        'defaults' => [
            'guard' => 'admin',
            'passwords' => 'users',
        ],
...

        'guards' => [
            'admin' => [
                'driver' => 'jwt',
                'provider' => 'admin_users',
            ],
        
        ],
        
        'providers' => [
            'admin_users' => [
                'driver' => 'eloquent',
                'model' => App\Models\Auth\AdminUser::class,
            ],
    
        ],

```

###命令
* 导入sql
```bash
php artisan admin:import
```
* 一键生成
```bash
php artisan admin:generate table_name [--model=ModelName] --force
```
```table_name``` 为数据库表名，```model```为模型名称，可以带路径如：Order/OrderGoods。如果要覆盖，则需要带上```--force```。
一件生成命令会自动创建资源控制器，以及对应的模型、服务、仓储类。

### 前端

前端页面在resources/page下，参考[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)文档。
直接运行
```bash
npm run dev
```
