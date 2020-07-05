export interface Project {
    id: string,
    name: string,
    description:string,
    tag: string,
    accessTime: number,
    style: string,
    imageData: ImageData
    videoData: VideoData
}

export interface ImageData{
    images: string[],
    carsel: boolean
}

export interface VideoData{
    videos: string[]
}

export interface ProjectRequest{
    name: string,
    description:string,
    tag: string,
    accessTime: number,
    style: string,
    imageData: ImageData,
    videoData: VideoData
}