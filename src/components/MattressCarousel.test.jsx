import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import { KartContext } from '../context/Kart';
import { getMattresses } from '../services';
import theme from '../theme';
import MattressCarousel from './MattressCarousel';

describe('Mattress Carousel', () => {
  test('Should add products to the kart', async () => {
    const user = userEvent.setup();
    const mattresses = await getMattresses();
    const kartContext = {
      addItem: vi.fn(() => 0),
    };

    render(
      <ThemeProvider theme={theme}>
        <KartContext.Provider value={kartContext}>
          <MattressCarousel mattresses={mattresses} />
        </KartContext.Provider>
      </ThemeProvider>
    );

    await user.click(screen.getByRole('button', { name: /saatva classic/i }));
    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );
    await user.click(screen.getByRole('button', { name: /loom & leaf/i }));
    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );
    expect(kartContext.addItem).toHaveBeenCalled();
  });
});
