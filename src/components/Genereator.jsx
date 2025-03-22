import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from './../utils/swoldier';
import Button from './Button';

function Header( props ){
    let {index , title , description } = props
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 justify-center'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xlg sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className= 'text-sm sm:text-base mx-auto' >{description}</p>
        </div>
    )

}

export default function Genereator(props) {
    const {poison ,setPoison ,muscles ,setMuscles ,goal ,setGoal , updateWorkout} =props
const [showModel, setShowModel] = useState(false)    



function toggleModal(){
        setShowModel(!showModel)

    }



function updateMuscles(musclesGroup){


    if(muscles.includes(musclesGroup)){
        setMuscles(muscles.filter(val => val !== musclesGroup))
        return
    }

    if(muscles.length > 2){
        return
    }

    if(poison !== 'individual'){
        setMuscles([musclesGroup])
        return
    }

    setMuscles([...muscles , musclesGroup])

    if(muscles.length === 2){
        setShowModel(false)

    }

}
  return (
    <>
    <SectionWrapper id={'generate'} header={"Generate Your Workout"} 
    title={['It\'s' , 'Huge' ,'O\'clock']} >
        <Header index={'01'} title={'Pick Your Poison'} 
        description={'Select the workout you wish to endure.'} />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type , typeIndex)=>{
            return(
                <button onClick={()=>{setPoison(type)}} 
                className={`px-4 bg-slate-950 border py-3 rounded-lg 
                    duration-200 hover:border-blue-600 
                    ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}
                key={typeIndex}>
                    <p className='uppercase '>{type.replaceAll('_' , ' ')}</p>
                </button>
            )
        })}

        </div>

        <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'} />
        <div className='bg-slate-950 border border-solid flex flex-col border-blue-400 rounded-lg'>
            <button onClick={()=>{toggleModal()}} className='relative flex py-3 justify-center items-center'>
                <p>{muscles.length=== 0 ? 'Select muscle group' : muscles.join(" ")}</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>

            </button>
        {showModel && (
            <div className='flex flex-col px-3 pb-3'>
                {(poison === 'individual' ? WORKOUTS[poison] : 
                Object.keys(WORKOUTS[poison])).map((muscleGroup , musclesGroupIndex)=>{
                    return(
                        <button
                        onClick={()=>{ updateMuscles(muscleGroup) }}
                        key={musclesGroupIndex}
                        className={'hover:text-blue-400 duration-200 '
                            + (muscles.includes(muscleGroup) ? 'text-blue-400' : ' ')}
                        >
                            <p className='uppercase'>{muscleGroup.replaceAll('_' , ' ')}</p>
                        </button>
                    )
                })
                
                }

            </div>
        )}

        </div>

        <Header index={'03'} title={'Become Juggernaut'} 
        description={'Select your ultimate objective.'} />
        <div className='grid grid-col-1 sm:grid-cols-3 gap-4 '>
        {Object.keys(SCHEMES).map((scheme , schemeIndex)=>{
            return(
                <button onClick={()=>{setGoal(scheme)}} 
                className={`px-4 bg-slate-950 border py-3 rounded-lg 
                    duration-200 hover:border-blue-600 
                    ${scheme === goal ? 'border-blue-600' : 'border-blue-400'}`}
                key={schemeIndex}>
                    <p className='uppercase '>{scheme.replaceAll('_' , ' ')}</p>
                </button>
            )
        })}

        </div>

            <Button func={updateWorkout} text={'Formulate'}/>
    
    </SectionWrapper>
    
    
    </>

)
}
