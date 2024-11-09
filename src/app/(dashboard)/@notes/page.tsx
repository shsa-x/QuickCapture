'use client'
import { useState } from "react";
import NoteCards from "@/app/@modal/@noteCards/page"
import { Note } from "c:/Users/91854/Desktop/quickcapture/src/types/Notes";
import { useNote } from "@/context/NoteContext";

export default function Notes(){
    const [width, setWidth] = useState(window.innerWidth)
    const {Notes} = useNote();
    window.addEventListener('resize', () => {
        if(width > 1220) setCols(4);
        else if(width > 720) setCols(3);
        else setCols(2);
        setWidth(window.innerWidth)
    })

    const [cols, setCols] = useState(width > 1220 ? 4 : width > 720 ? 3 : 2);
    const colBoxes = [];
    for(let i = 0; i < cols; i++) {
        const array = Notes.filter((_, idx) => {
            return idx % cols === i; 
        });
        colBoxes.push(<Boxes key={i} notesArray={array} />);
    }

    return (
        <div 
        className={`grid overflow-scroll flex-1 p-4 ${cols === 4 ? 'grid-cols-4' : ''} ${cols === 3 ? 'grid-cols-3' : ''} ${cols === 2 ? 'grid-cols-2' : ''} gap-4`}
        >
         { colBoxes } 
        </div>
    )
}


const Boxes = ({notesArray} : {notesArray: Note[]}) => {

    return (
        <div>
            {
                notesArray.map((obj) => (
                    <NoteCards content={obj} />
                ))
            }
        </div>
    )
}