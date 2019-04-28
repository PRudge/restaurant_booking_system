A group project in Codeclan. Built using Spring, React, PostgreSQL, HTML5, CSS3 with 1 week deadline.

Task: 
You have been tasked to create a booking system for a brand new restaurant. The restaurant needs a way to book and arrange tables for customers who are booking over the phone. This system is for the staff to use.

- [ ] -> tasks we did not manage to achieve
- [x] - tasks we did manage to achieve

# MVP:
Your system must be able to:

- [x] Allow the manager to book a table at the restaurant for a particular customer at a particular time and date
- [x] Update a booking, for example if the customer wants to change a booking time
- [x] Display a list of bookings for a given date
- [x] Display a list of customers ordered by frequency of visits

# Project Extensions:

- [x] Don't allow double bookings
- [ ] Add a customer's receipt to a booking so you can view their previous orders and how much they spent
- [ ] Calculate how much a customer has spent over a given period of time
- [ ] Give discounts to frequent customers
- [ ] Whatever features you think would be beneficial to a restaurant


## Setup:

```
createdb bookingSystem
npm install
run backend using IntelliJ
npm start
```

## Things I would do differently next time:
1. Separate files by introducing more folders (for containers and components).
2. Plan for states/props ahead of time. In the end, we lifted states higher but had we done it at the start, 
we would save some time refactoring.
3. Name the files better. Better folder structure would've helped massively here. It was quite confusing to navigate through all components/containers in one folder.

## Next Steps, if we'd have more time:
1. Finish the project extensions.
2. Make booking a table more intuitive experience.
4. Finish styling up components/containers. Some pages lack CSS and some have no CSS whatsoever. 


