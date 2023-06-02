<?php

namespace Cameron\Admin\Models\System;

use Illuminate\Database\Eloquent\Model;
use Cameron\Admin\Traits\SerializeDate;

class Dictionary extends Model
{
    use SerializeDate;

    protected $table = 'app_dictionary';
    protected $guarded = [];

    protected $casts = [
        'value' => 'array',
    ];

    public function getTable()
    {
        return config('admin.table_names.dictionary', parent::getTable());
    }

}
