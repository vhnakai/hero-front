
import { Link, useLoaderData } from 'react-router-dom'
import { HeroButton, HeroContainer, HeroHeader, HeroList } from './styles'

export interface HeroInterface {
  id: number,
  name: string,
  heroName: string
  birthDate: string
  heigth: number
  weigh: number
}

export function Heroes() {

  const heroes = useLoaderData() as HeroInterface[];

  return (
    <HeroContainer>
      <HeroList>
        <HeroHeader>
          <h1>Heroes</h1>
          <Link to={`/hero/`} >
            <HeroButton>
              New Hero
            </HeroButton>
          </Link>
        </HeroHeader>
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
                    <Link to={`/hero/${hero.id}`} >            
                      <HeroButton>
                        view
                      </HeroButton>
                    </Link>
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

//will have a table with name , hero name , view button and a modal with form to add new Hero

