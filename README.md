# Spazetime - the new paradigm for global time keeping

Even Einstein understood that you cannot just separate space and time. At one place in the world it can be early afternoon, while at another, it is in the middle of the night. So who decides what time it is at the place you are at now? Should it be, as it is now, some random dude drawing time zones on a map? No, of course not. It should be our sun, as has been the case since the dawn of life on this planet, up until very recently. Time of day should be in harmony with noon and midnight for everyone, at every location. This is how time was originally defined and meant to be. Now there would seem to arise a problem with this. How will people at different places agree on which time things should be done. Enter spazetime.

## How does spazetime work?

Spazetime consists of two components, spaze and time. Time is simply the local solar time. The day starts when the night is at its darkest, 00:00 and ends 24 hours later. 12:00 then naturally conicides with noon. Spaze is related to the longitudinal position, and has the same units as time: hours, minutes and seconds. One lap around the world equals 24 hours of spaze. In other words you can simply calculate spaze by dividing the longitude with 15. Both spaze and time can nowadays easily be obtained with a mobile phone, by using the GPS and the Coordinated Universal Time (UTC), and converting the UTC to the local solar time, with the help of spaze.

When communicating with other people, people should always use both spaze and time. Nothing more then needs to be specified. No time zones need to be considered, they are completely obsolete. No more summer time or winter time. No more misunderstandings when setting up phone meetings accross continents.

´´´
Example 1:

(1) The Mumbai office sets up a meeting at {Spaze: -5:00, Time: 14:00}

(2) You are located at {Spaze: 1:00}

What is the local meeting time for you?

Solution:

Transform point (1) to the spaze where you are located. The rule when doing tranformations in spaze is to the keep the sum of the two spazetime components constant. In this case that sum is equal to 9:00. Point (1) then becomes:

(1') {Spaze: 1:00, Time: 8:00}

Answer:

The meeting time is at local time 8:00 given your location.
´´´


Example 2:

(1) You are at {Spaze: 1:00, Time: 10:30} 

(2) The bus leaves at {Spaze: 1:30, Time: 12:00}

How long is it until the bus leaves?

Solution:

A time difference can easily be calculated for two spazetime points at the same spaze. It is then simply the difference between the two time components. So first transform point (2) to (1) in spaze. The rule is, once again, to keep the sum of the two components constant, so decreasing one should be followed by increasing the other. Transforming point (2) to the same point in spaze as point (1) gives:

(2') {Spaze: 1:00, Time: 12:30}

Time duration = (2').Time - (1).Time = 2:00 hours

Answer:

It is two hours until the bus leaves.

