import { useNote } from '@/context/NoteContext';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation'
import React from 'react'

function Create() {

  const matteColors = [
    '#B0C8E6', // Darker Light Blue
    '#DBA9C3', // Darker Light Pink
    '#D3C171', // Darker Light Yellow
    '#8DBDA2', // Darker Light Green
    '#D9B8A9', // Darker Light Peach
    '#A09FC5', // Darker Light Lavender
    '#D09685', // Darker Soft Coral
    '#8CB297', // Darker Pale Mint
    '#D4B172', // Darker Soft Gold
    '#A9ABB4', // Darker Cool Gray
    '#C9A37D', // Darker Warm Beige
    '#94BADE', // Darker Light Sky Blue
    '#BAC98E', // Darker Soft Lime
    '#D19BA3', // Darker Pale Pink Rose
    '#A2A6BA', // Darker Pale Slate Blue
    '#98C0AA', // Darker Light Aquamarine
  ];
  
  function getRandomMatteColor(): string {
    const randomIndex = Math.floor(Math.random() * matteColors.length);
    return matteColors[randomIndex];
  }
  
  console.log(getRandomMatteColor());
  const id = nanoid();
  const router = useRouter();
  const {setNote} = useNote();

  const createNote = () => {
    setNote({
      id,
      title: "",
      type: "",
      text: "",
      color: getRandomMatteColor()
    })
    router.push(`/editor/${id}`);
  }

  return (
    <div 
    className='absolute z-10  w-[8vh] h-[8vh] flex justify-center items-center cursor-pointer  bg-black bottom-20  right-20 max-sm:right-10 p-2 rounded-[50%]'
    onClick={createNote}
     >
      <FontAwesomeIcon className=' text-white text-3xl ' icon={faPlus} />
    </div>
  )
}

export default Create