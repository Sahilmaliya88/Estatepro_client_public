export type user_type = {
    id:string,
    firstname:string,
    lastname:string,
    photo:string | null,
    email:string,
    photoId:string | null,
    provider:string | null,
    role:string,
    isActive:string,
    location: location[] | []
}
export type location={
    id:number,
    city:string,
    country:string,
    lag:number,
    lat:number,
    user_id:string
}