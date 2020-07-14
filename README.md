<p align="center"> 
<img src="https://github.com/urban-eriksson/spazetime/blob/master/images/equation-of-time.png">
</p>

# Placetime - the global local time format

(See demo here: www.localsolartime.org)

Even Einstein understood that you cannot just separate space and time. At one place in the world it can be early afternoon, while at another, it is in the middle of the night. So who decides what time it is at the place you are at right now? Should it be some random dude drawing time zones on a map? No, of course not. It should be our sun, as has been the case since the dawn of life on this planet. Time of day should be in harmony with noon and midnight for everyone, at every location on the planet. This is how time was originally defined and meant to be. Now there would seem to appear a problem with this. How will for instance people at different places on the earth agree on which time things should be done? Enter placetime.

## How does placetime work?

Placetime consists of two components, place and time. Time is simply the local solar time. The day starts when the night is at its darkest, 00:00 and ends 24 hours later. 12:00 then naturally coincides with noon. Place is your east-west position on earth, and is directly related to the longitudinal position. It has been given the same units as time: hours, minutes and seconds. One lap around the world then equals 24 hours of place units. The reference point is the same old village in England: Greenwich. The place is in other words how long time the earth takes to rotate from Greenwich to the location you are now. One can simply calculate the place by dividing the longitude with 15 and reversing the sign. Place can nowadays easily be obtained with a mobile phone, by using GPS. The local solar time is a litte bit more complicated. First the mean solar time can be calculated by subtracting place from the Coordinated Universal Time (UTC). To get closer to the true local solar time one needs to apply a correction because of the obliquity of the eccliptic for the earth and also the eccentricity of the earth's orbit around the sun. These effects are summarized into something which is called the "equation of time", see figure 1. There exist different levels of complexity for this calculation, and to get the true local solar time to within a roughly a second of accuracy the calculations get quite complicated. One can use simpler formulas, but still be able to predict the local solar time with an accuracy in the order of +/- 10 seconds, see for example:

https://www.esrl.noaa.gov/gmd/grad/solcalc/solareqns.PDF


<p align="center"> 
<img src="https://github.com/urban-eriksson/spazetime/blob/master/images/equation-of-time.png">
</p>
<p align="center"><b>Figure 1.</b> Equation of time over a whole tropical year.</p>


Placetime can, in addition to providing the local solar time, also be used as a global time format. No time zones need then to be used. In fact placetime fulfills the same purpose as time zones but in a much cleaner way since there are no artificial borders involved. See below for a couple of examples.

### Example 1:

(1) The Mumbai office sets up a meeting at {Place: -5:00, Time: 14:00}

(2) You are located at {Place: 1:00}

What will be the local meeting time for you?

Solution:

Transform point (1) to the place where you are located. The rule when doing tranformations in place is to the keep the sum of the two placetime components constant. In this case that sum is equal to 9:00. Point (1) then becomes:

(1') {Place: 1:00, Time: 8:00}

Answer:

The meeting time will be at local time 8:00 given your location.

### Example 2:

(1) You are at {Place: 1:00, Time: 10:30}

(2) The bus leaves at {Place: 1:30, Time: 12:00}

How long is it until the bus leaves?

Solution:

A time difference can easily be calculated for two placetime points at the same place. It is then simply the difference between the two time components. So first transform point (2) to (1) in place. The rule is, once again, to keep the sum of the two components constant, so decreasing place should be followed by increasing time. Transforming point (2) to the same point in place as point (1) gives:

(2') {place: 1:00, Time: 12:30}

Time duration = (2').Time - (1).Time = 2:00 hours

Answer:

It is two hours until the bus leaves.

## Source code

https://github.com/urban-eriksson/spazetime

