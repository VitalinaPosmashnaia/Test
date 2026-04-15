export class BeautySalon {
  constructor() {
    this.appointments = [];
  }

  addAppointment(customerName, service, price) {
    if (!customerName || !service || price <= 0) {
      throw new Error("Invalid appointment data");
    }
    
    const newAppointment = { customerName, service, price, date: new Date() };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  // НАВМИСНА ПОМИЛКА ТУТ:
  // Замість віднімання знижки, ми її додаємо (або просто повертаємо хибне значення)
  calculateDiscountedPrice(price, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) return price;
    
    // Було: price - (price * discountPercentage) / 100;
    // Стало: помилкова формула (наприклад, забули відняти від основної ціни)
    return (price * discountPercentage) / 100; 
  }

  clear() {
    this.appointments = [];
  }
}