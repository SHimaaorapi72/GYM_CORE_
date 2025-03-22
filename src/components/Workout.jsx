import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExreciseCard from "./ExreciseCard";

export default function Workout(props) {
    const { workout } = props;
    return (
       <>
        <SectionWrapper
            header={"Welcome to"}
            title={["The", "Danger", "Zone"]}
            id={'workout'}

        >
            <div className="flex flex-col gap-4">
                {workout.map((exercise , i)=>{
                    return(
                        <ExreciseCard exercise={exercise} i={i}/>
                    )
                })}
            
            </div>


        </SectionWrapper>
       </>
    );
}
