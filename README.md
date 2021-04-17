Sage of Empires
===============

A web app that gives users sage advice for the civ they are currently playing with / against to use on their 2nd monitor.

Features:

- View civ unique units, their costs and what their strengths and weaknesses are
- View civ unique techs and their costs
- View civ bonuses and team bonus
- Auto scrolling build order panel that shows bronze/silver/gold rating based on time elapsed
- Hotkeys (activated by double space or double click) for common tasks

Use the app at https://sage-of-empires.web.app/

Contribute your own build orders
--------------------------------

Add a new ts file to SageOfEmpires\src\app\_data\build-orders

Implement the interface 'IBuildOrder'

Add build order steps for each new villager created, filling in the following properties:

- villagerCount - The number villager just created.
- idealTimeInSeconds - the in game time that the step should ideally be finished in. 
- details - The main message for each step.
- footnotes - Use to add extra details into the steps, for instance researching techs or extra actions.
- imageUrl - Not used yet.
- ageUpValue - Set to II for the advance to feudal step, III for castle, IV for imperial.

In the recommendedCivs property, add an array of civs that the build order works well for.
E.g.  recommendedCivs = [new Berbers(),new Burmese()]

Add the new build order to the build order service in SageOfEmpires\src\app\services\build-order.service.ts by adding to the buildOrders array.

Run ng serve to test.

Create PR.


Contribute updated civ stats
----------------------------

Find civ in SageOfEmpires\src\app\_data\civs.ts

Update data

Create PR


Contribute updated unit stats
-----------------------------

Find civ in SageOfEmpires\src\app\_data\units.ts

Update data

Create PR


