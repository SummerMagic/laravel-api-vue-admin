<?php


namespace Jmhc\Admin\Repositories;

use Jmhc\Admin\Library\Repository;

class AreaRepository extends Repository
{
    protected $allowFields = [
        'id',
        'pid',
        'shortname',
        'name',
        'mergename',
        'level',
        'pinyin',
        'code',
        'zip',
        'first',
        'lng',
        'lat',
    ];
    protected $orderField  = '';
}
