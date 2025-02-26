import { NextResponse } from "next/server"; 
import fs from 'fs';
import path from 'path';
import StudentTeacherData from '../../../../public/data/info.json'

export function GET(req) {
    
    let studentsData=StudentTeacherData.students
    console.log(studentsData)
    return (
        NextResponse.json(studentsData)
    )
}



export async function POST(req) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'info.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const StudentTeacherData = JSON.parse(jsonData);

        const { name } = await req.json(); 

        let newStudent = { id: StudentTeacherData.students.length + 1, name };
        StudentTeacherData.students.push(newStudent);

        return NextResponse.json({ message: "Student", student: newStudent });
    } catch (error) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
