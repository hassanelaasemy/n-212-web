import React from 'react'
import CommingSoonVidoeComp from '../../components/Cours/CommingSoonVidoeComp';
import TitleHead from '../../components/TitleHead';
import FormationContent from '../../components/Home/FormationContent';


export default function HomeCours() {
    return (
        <>
            <CommingSoonVidoeComp />
            <TitleHead title={"Formation"} />
            <FormationContent />
        </>
    );
}
