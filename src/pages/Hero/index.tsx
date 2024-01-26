
import { HeroContainer, HeroList } from './styles'

interface HeroesInterface {

  id: number,
  name: string,
  heroName: string

}

export function Hero() {

  const heroes: HeroesInterface[] = [
    {
      "id": 2,
      "name": "Utena",
      "heroName": "MagiaBaiser",
    },
    {
      "id": 3,
      "name": "Kiwi",
      "heroName": "MagiaLeo",
    }
  ]
  return (
    <HeroContainer>
      <h1>Heroes</h1>
      <HeroList>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hero name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td>{hero.name}</td>
                  <td>{hero.heroName}</td>
                  <td>
                    <a href={`/hero/${hero.id}`} >access</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </HeroList>
    </HeroContainer>
  )

}

//will have a table with name , hero name , action button
