//Form to Update or Create a new Hero
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Controller, FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, BaseInput, AmountInput, ActionFooter, Calendar } from "./styles";
import { HeroInterface } from "..";
import { HeroButton } from "../styles";

const heroFormValidationSchema = zod.object({
  name: zod.string().min(1),
  heroName: zod.string().min(1),
  birthDate: zod.date(),
  heigth: zod.number(),
  weigh: zod.number()
})

type heroFormData = zod.infer<typeof heroFormValidationSchema>

export function HeroForm() {

  const params = useParams();
  const hero_id = Number(params.id);
  const { name, heroName, birthDate, heigth, weigh } = useLoaderData() as HeroInterface;

  const heroForm = useForm<heroFormData>(
    {
      resolver: zodResolver(heroFormValidationSchema),
      defaultValues: {
        name: name,
        heroName: heroName,
        birthDate: new Date(birthDate),
        heigth: heigth,
        weigh: weigh
      }
    }
  )

  const { handleSubmit, register, control } = heroForm;

  function handleUpdateHero(data: heroFormData, id: number) {

    console.log(data, id);

    return data
  }


  return (
    <FormContainer>
      <form
        onSubmit={handleSubmit((d) => handleUpdateHero(d, hero_id))}>
        <FormProvider {...heroForm}>
          <label htmlFor="name">Name</label>
          <BaseInput
            id='name'
            {...register('name')}
          />

          <label htmlFor="heroName">Hero name</label>
          <BaseInput
            id="heroName"
            {...register('heroName')}
          />

          <label htmlFor="birthDate">Birthdate</label>
          <Controller
            control={control}
            name='birthDate'
            render={({ field,  }) => (
              <Calendar
                onChange={field.onChange}
                selected={field.value}
              />
          )}
          />

          <label htmlFor="heigthInCentimetres">Heigth</label>
          <AmountInput
            id="heigthInCentimetres"
            type="number"
            placeholder="00"
           {...register('heigth', { valueAsNumber: true })}
          ></AmountInput>

          <label htmlFor="weighInKilo">Weigh</label>
          <AmountInput
            id="weighInKilo"
            type="number"
            placeholder="00"
            {...register('weigh', { valueAsNumber: true })}
          ></AmountInput>

          <ActionFooter>
            <Link to={`/heroes`} >
              <HeroButton>
                Back
              </HeroButton>
            </Link>
            <HeroButton type="submit">Send</HeroButton>
          </ActionFooter>

        </FormProvider>
      </form>
    </FormContainer>
  )
}
