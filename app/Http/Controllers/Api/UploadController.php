<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UploadFileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function store(UploadFileRequest $request)
    {
        $attributes = $request->validated();
        $path = $request->file('file')->store($attributes['directory'] ?? '/images');
        return Storage::url($path);
    }
}
