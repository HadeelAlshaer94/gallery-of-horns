import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

    render() {
        return (
            <main>
                <HornedBeast
                    title="Unicorn"
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMZJb71Ik4RMpvSSoxwNMvcTW4Ep_OOJ-IA&usqp=CAU"
                    description="The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead."
                />

                <HornedBeast
                    title="Deer"
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Male_impala_profile.jpg/330px-Male_impala_profile.jpg"
                    description="Deer or true deer are hoofed ruminant mammals forming the family Cervidae."
                />

                <HornedBeast
                    title="Rhino"
                    imageUrl="https://www.milenio.com/uploads/media/2021/04/22/fase-transferencia-embriones-via-gestacion.jpg"
                    description="A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae. "
                />
            </main>
        )
    }
}

export default Main;