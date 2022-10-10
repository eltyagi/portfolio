import React from "react";
import './research.css';


class research extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'research'>
                <div className = 'label'>
                    Research Work
                </div>

                <div className = 'label-Title'>
                    "Research is creating new knowledge" - Neil Armstrong<br/><br/>
                </div>
                
                <div className="label-Desc">
                    I have spent and continue to spend a lot of my efforts into exploring
                    and contributing to the world of academia. I see technology as a tool, 
                    and engineering as the efficient deployment of this tool. 


                    <br/><br/>
                </div>

                <div className = 'label-achievements'>
                    <span className = 'achievements'>Achievements</span>
                    <br/> x A Neuro-Fuzzy Approach to MOPP Open Time Prediction for Chemical Threats in 
                            Low-Intensity Conflicts. http://doi.org/10.4018/IJFSA.302124<br/>
                    <br/> x Explosion Consequence Analysis for Military Targets Through Support Vector Machines, doi:10.1109/ICRITO48877.2020.9197866.<br/>

                    <br/> x Neuro-Fuzzy Approach to Explosion Consequence Analysis, doi:10.1109/Confluence47617.2020.9058024.<br/>

                    <br/> x A Review of Sentiment Analysis Techniques using Soft Computing Approaches, doi:10.1109/Confluence51648.2021.9377031.<br/>

                    <br/> x Application of Fuzzy Logic Control Systems in Military Platforms, doi:10.1109/CONFLUENCE.2019.8776955.<br/>
                </div>
                
            </div>
        );
    }
}

export default research;