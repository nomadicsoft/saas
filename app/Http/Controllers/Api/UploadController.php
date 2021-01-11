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
        $file = $request->file('file');
        $path = $file->store($attributes['directory'] ?? '/images');
        return response()->json([
            'url' => Storage::url($path),
            'path' => $path,
            'mime_type' => $file->getMimeType(),
            'original_name' => $file->getClientOriginalName(),
            'original_extension' => $file->getClientOriginalExtension(),
        ]);
    }
}
