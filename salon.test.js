import { describe, it, expect, beforeEach } from 'vitest';
import { BeautySalon } from './salon';

describe('BeautySalon Unit Tests', () => {
  let salon;

  beforeEach(() => {
    salon = new BeautySalon();
  });

  // Тест 1: Успішне додавання запису
  it('should add a new appointment successfully', () => {
    const appointment = salon.addAppointment('Vytalina', 'Manicure', 500);
    expect(salon.appointments.length).toBe(1);
    expect(appointment.customerName).toBe('Vytalina');
  });

  // Тест 2: Помилка, якщо ціна від'ємна
  it('should throw error for invalid price', () => {
    expect(() => salon.addAppointment('Vytalina', 'Haircut', -100)).toThrow("Invalid appointment data");
  });

  // Тест 3: Перевірка розрахунку знижки 10%
  it('should calculate 10% discount correctly', () => {
    const finalPrice = salon.calculateDiscountedPrice(1000, 10);
    expect(finalPrice).toBe(900);
  });

  // Тест 4: Перевірка знижки 0%
  it('should return original price if discount is 0%', () => {
    const finalPrice = salon.calculateDiscountedPrice(500, 0);
    expect(finalPrice).toBe(500);
  });

  // Тест 5: Перевірка некоректної знижки (більше 100%)
  it('should ignore discount if it is over 100%', () => {
    const finalPrice = salon.calculateDiscountedPrice(500, 150);
    expect(finalPrice).toBe(500);
  });

  // Тест 6: Перевірка обов'язковості імені клієнта
  it('should throw error if customer name is missing', () => {
    expect(() => salon.addAppointment('', 'Pedicure', 600)).toThrow();
  });
});