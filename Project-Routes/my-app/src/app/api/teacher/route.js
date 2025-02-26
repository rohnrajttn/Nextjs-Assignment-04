import { NextResponse } from "next/server"; 
import StudentTeacherData from '../../../../public/data/info.json'

export async function GET(req) {
    
    let teachersData=StudentTeacherData.teachers
    console.log(teachersData)
    return (
        NextResponse.json(teachersData)
    )
}