import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TFunction } from 'i18next';
import { UseFormRegister } from 'react-hook-form';

interface FavTypeSelectProps {
  t: TFunction<'translation', undefined>;
  register: UseFormRegister<{ firstName: string; lastName: string; favDrink: string }>;
  favDrink: string;
}

export function FavTypeSelect({ t, register, favDrink }: FavTypeSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-type-label">{t('userFavDrink')}</InputLabel>
      <Select
        id="select-favorite-drink"
        value={favDrink}
        label={t('userFavDrink')}
        {...register('favDrink')}
        labelId="select-type-label"
        fullWidth
      >
        <MenuItem value="Beer">{t('userSelectBeer')}</MenuItem>
        <MenuItem value="Drinks">{t('userSelectDrinks')}</MenuItem>
        <MenuItem value="Shots">{t('userSelectShots')}</MenuItem>
      </Select>
    </FormControl>
  );
}
