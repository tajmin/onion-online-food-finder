import { useEffect, useState } from "react"

const useMeals = () => {
    const [meals, setMeals] = useState();

    useEffect(() => {
        fetch('https://tajmin.github.io/onion-api/meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    return [meals, setMeals];
}

export default useMeals;