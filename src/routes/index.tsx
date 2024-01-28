/* eslint-disable react-refresh/only-export-components */
import { LoaderFunctionArgs, createBrowserRouter, useRouteError } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'

import { Home } from '../pages/Home'
import { Superpower } from '../pages/Superpower'
import ErrorPage from '../error-page'
import { HeroInterface, Heroes } from '../pages/Hero'
import { HeroForm } from '../pages/Hero/HeroForm'


export const router = createBrowserRouter([{
  path: "/",
  element: <DefaultLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "superpower",
      element: <Superpower />,
      loader: superpowerLoader
    },
    {
      path: "heroes",
      element: <Heroes/>,
      loader: heroesLoader,
      ErrorBoundary: HeroesBoundary,
    },
    {
      path: "hero/:id",
      element: <HeroForm/>,
      loader: heroLoader,
    }
  ]
}])

async function heroesLoader({ request }: LoaderFunctionArgs): Promise<HeroInterface[]> {

  //need to fix cors to read localhost api
  // const res = await fetch("http://localhost:3000/heroes", {
  //   signal: request.signal, 
  // });
  // console.log(res)
  // heroes = await res.json();

  if (request.signal) {
    return [{
      "id": 2,
      "name": "Utena",
      "heroName": "MagiaBaiser",
      "birthDate": "1997-12-01T02:00:00.000Z",
      "heigth": 160,
      "weigh": 56
    },
    {
      "id": 3,
      "name": "Kiwi",
      "heroName": "MagiaLeo",
      "birthDate": "1997-10-06T02:00:00.000Z",
      "heigth": 154,
      "weigh": 40
    }];
  }
  return [];
}

async function superpowerLoader({ request }: LoaderFunctionArgs): Promise<[]> {

  //need to fix cors to read localhost api
  // const res = await fetch("http://localhost:3000/heroes", {
  //   signal: request.signal, 
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //     'Access-Control-Allow-Origin': '*' 
  //   }});
  // console.log(res)
  // heroes = await res.json();

  if (request.signal) {
    return [];
  }
  return [];
}

async function heroLoader({ params }: LoaderFunctionArgs): Promise<HeroInterface | null> {
  if (!params.id) {
    throw new Error("Expected id");
  }

  const heroes = [{
    "id": 2,
    "name": "Utena",
    "heroName": "MagiaBaiser",
    "birthDate": "1997-12-01T02:00:00.000Z",
    "heigth": 160,
    "weigh": 56
  },
  {
    "id": 3,
    "name": "Kiwi",
    "heroName": "MagiaLeo",
    "birthDate": "1997-10-06T02:00:00.000Z",
    "heigth": 154,
    "weigh": 40
  }];

  const hero = heroes.find(({ id }) => id == Number(params.id))

  // const res = await fetch(`http://localhost:3000/heroes/${params.id}`);

  // if(!res) {
  //   throw new Error(`Uh oh, I couldn't find a hero with id "${params.id}"`);
  // }

  // return res.json();

  if (!hero) {
    throw new Error(`Uh oh, I couldn't find a hero with id "${params.id}"`);
  }

  return hero 
}

function HeroesBoundary() {
  const error = useRouteError() as Error;
  return (
    <>
      <h2>Error 💥</h2>
      <p>{error.message}</p>
    </>
  );
}
