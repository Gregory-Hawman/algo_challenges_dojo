Chapter 18 – Bit Arithmetic
Numerical Systems
As humans, we have been raised from a young age to have a
specific attitude toward the number ‘ten’. This is rooted in the fact
that as a species we have ten fingers, ten toes. As a result, there are
ten numerals in the modern symbolic representation of numbers (0-
9). But how would our world look if from the beginning our species
had only eight fingers? Or what if we had sixteen fingers? Or what if
we, like computers, primarily thought about only “on” and “off” – the
equivalent of having only two numerals to choose from? Our writing
would look different, although the actual quantities would be the
same.
Numerical systems by nature are simply different ways that symbols
can represent a quantity. A certain quantity can be represented by
different symbols. Whether we say “quarante-deux” or “forty-two” or
0x2A or 42, the amount is the same. So, why can’t we just stay with
the decimal (ten-based) system that is ‘native’ and natural to
humans?
Computers don’t think that way, that’s why. Computer architecture
from the beginning has evolved from a foundation based on binary
digital logic, where signals are either ON or OFF. They live in a world
of two numerals, not ten numerals – almost as if they count using
two fingers, rather than ten fingers. Each of these 0/1 numerals is
called a bit. If you can only use 0’s and 1’s then a number like 42
(decimal) becomes 0b0101010 (binary). This would make for very
long and tedious numbers indeed, except that we have combined
these groups of 2, to create number systems that they are closer to
the 10-based system that is natural to us.
Chapter 18 – Bit Arithmetic
Octal System
There is a number system called ‘octal’ that uses 8 numerals,
grouping three bits together into one numeral that goes from 0 to 7.
After counting up to 7, we start using an additional digit, just like in
our usual decimal system we start using the “tens” digit when
counting beyond 9. The indicator that we are using octal is the prefix
‘0o’, so the number 8 (decimal) will appear in octal as 0o10. In
decimal notation, each numeral has a jump in value of 10x as we
move from the ‘ones’ digit to the ‘tens’ digit, or from the ‘tens’ digit to
the ‘hundreds’ digit. Similarly, in octal each digit represents a jump of
8x. A number like 0o4213, then, is (4 x 83) + (2 x 82) + (1 x 81) + (3 x
80) = 2187 (decimal). You won’t need to deal with octal numbers
much – if anything, you will deal with either base-2 or base-16 – but
it gives a good introduction to the idea that computers don’t have ten
fingers and hence don’t agree with our completely arbitrary decision
to think about numbers as having exactly 10 numerals.
􀀀 Decimal to Octal Practice
For practice, convert the following from decimal to octal
representation. Example: 31 becomes 0o37.
13 6 25 8 45 10 -9 64 255
􀀀 Octal to Decimal Practice
For practice, convert the following from octal to decimal. Example:
0o47 becomes 39.
0o610 0o5 0o26 0o47 0o302 0o0 -0o12 0o76 0o101
􀀀 Decimal to Octal String
Create a function dec2OctStr(value) that converts a number into a
string representing that number in octal notation. For this challenge,
do not use the (very convenient) toString function.
􀀀 Octal String to Value
Create a function octStr2Val(str) that accepts a string representing
an integer in octal notation, and returns the value. For this challenge,
do not use the (very convenient) parseInt function.
Chapter 18 – Bit Arithmetic
Octal represents groups of three bits, and since three is an odd
number, it isn’t the very best way to represent how a computer
natively thinks about numbers. It is much more common for us to
represent numbers in groups of four bits (hexadecimal) or simply one
bit at a time (binary).
Hexadecimal System
For a second, imagine that each of us have had eight fingers on
each hand, since birth. As a result, when we created our numeral
system, we created more than just 0-9 numerals. Instead, we
created enough numerals to represent every quantity that was “less
than two hands” worth. In our hypothetical world, that means there
are extra numerals after 9 that represent in a single character the
amounts up to “two hands worth”. That system is hexadecimal (16-
based), and hexadecimal numbers are prefixed by 0x (“zero-X”), just
as octal numbers are prefixed by 0o (“zero-Oh”). The extra numerals
0xA, 0xB, 0xC, 0xD, 0xE, 0xF are equivalent to 10, 11, 12, 13, 14, 15.
Each additional digit in hexadecimal is a multiplication by 16, so the
number 0x10 is equivalent to 16. The number 0x2A is equivalent to
42.
􀀀 Decimal to Hexadecimal
For practice, convert the following from decimal to hexadecimal.
Example: 31 becomes 0x1F.
13 6 25 8 45 10 -9 64 255 238
􀀀 Hexadecimal to Decimal
For practice, convert the following from hexadecimal to decimal.
Example: 0x47 becomes 71.
0xDB 0x5 0x20C 0x4F 0xB2 0x0 -0x12 0x7E 0x101
􀀀 Decimal to Hexadecimal String
Create a function dec2HexStr(value) that converts a number into a
string representing that number in hexadecimal notation. For this
challenge, do not use the (very convenient) toString function. For
example, given the value 108, the function should return "0x6C".
􀀀 Hexadecimal String to Value
Create a function hexStr2Val(str) that accepts a string representing
an int in hexadecimal notation, and returns the value. For this
challenge, do not use the (very convenient) parseInt function. For
example, given the string "0x1D2", the function should return 466.
Chapter 18 – Bit Arithmetic
There are 10 kinds of people in this world. Those that understand
binary, and those that don’t.
Binary System
If “hex” numbers make sense to you, then good job – you are
starting to think like a computer. If you really want to get geeky, you’ll
need to understand binary as well. In binary, each additional digit is
an additional power of 2, so a number like 0b1111111 = (1 x 27) + (1 x
26) + (1 x 25) + (1 x 24) + (1 x 23) + (1 x 22) + (1 x 21) + (1 x 20) = 255,
or 0xFF. Each four bits of binary translate into a single hex digit, so
translation should be fast. 0x3 = 0b0011, 0x8 = 0b1000, 0xB = 0b1011,
0xE = 0x1110.
􀀀 Decimal to Binary
For practice, convert the following from decimal to binary. Example:
117 becomes 0b1110101.
13 6 25 8 45 10 -9 64 255 128 35 0 198
􀀀 Binary to Decimal
For practice, convert the following from binary to decimal. Example:
0b100111 becomes 39.
0b10100101 0b111 0b1111000 0b110110 0b000 0b11
-0b1010 0b100110 0b1010101010 0b111001 0b100101
􀀀 Decimal to Binary String
Create a function dec2BinStr(value) that converts a number into a
string representing that number in binary notation. For this challenge,
do not use the (very convenient) toString function. For example,
given the value 35, the function should return "0b100011".
􀀀 Binary String to Value
Create a function binStr2Val(str) that accepts a string representing
an int in binary notation, and returns the value. For this challenge, do
not use the (very convenient) parseInt function. For example, given
the string "0b1010101", the function should return 85.
Ready for a bit of a break from bits? Here is a completely unrelated
(difficult!) challenge, if you wish:
􀀀 Reorder Word Fragments
You are given an array of equal-length strings containing lowercase
alphabetical characters or ‘?’. Reorder the words so that from word
to word, each letter is in alphabetical order (first letters are in order,
second letters are in order, etc). The ‘?’ can represent any letter
needed to satisfy this. Return the array in this order, with ? converted
into the alphabetically earliest possible letter. Return null if the
ordering is impossible. Given ["XD?E","BDE?","?A?E"], return
["AAAE","BDEE","XDEE"]. For ["BQX?","XD?E"], return NULL
because first letters require a different order than second letters
allow.
Second: Ensure you minimize every word. For ["S?","?Q"], return
["AQ","SQ"] not ["SA","SQ"].
Chapter 18 – Bit Arithmetic
Bitwise Operators, Part 1
Most math operators don’t know or care about a number system.
Addition is addition, whether “10 + 11 = 21” or “0b1010 + 0b1011 =
0b10101”. Ditto subtraction, multiplication, division, negation,
comparison and equality. Other operators make sense only if we
think of numbers in binary representation. To best understand these
bitwise operators, we must first consider three logical operators
(AND, OR, NOT). These operators work on Boolean values, which
are essentially one-bit values (true = 1, false = 0).
&& (logical AND) operates on two booleans. It returns true only
if both are true, else false.
|| (logical OR) operates on two booleans, returning true if either
is true, otherwise false.
! (logical NOT) operates on a single boolean value, inverting
true to false and vice versa.
Bitwise operators are equivalent to logical operators, except they
work one-bit-at-a-time across entire numbers. Some bitwise
operators accept two numbers, and others work on a single number.
The bitwise AND operator is &. It operates on two numbers
and compares them, one bit at a time (their least-significant
bits, their second-least-significant bits, etc). If both bits are 1,
then that same bit in the result is set to 1, otherwise that bit is
set to 0. It does this for every bit in the two operands. Example:
0b10101010 & 0b01100110 = 0b00100010.
The bitwise OR operator is |. It operates on two numbers and
compares them, one bit at a time (least-significant bits, secondleast-
significant bits, etc). If either are 1, then that bit in the
result is set to 1, otherwise it is set to 0. It does this for every bit
in the two operands. Example: 0b10101010 | 0b01100110 =
11101110.
The bitwise NOT operator is ~. It operates on one number,
examining one bit at a time in isolation. Each bit in the original
is inverted in the result. Each 1 becomes 0; each 0 becomes 1.
Example: ~0b10101010 = 0b01010101.
Note: JavaScript stores numbers as 64-bit (floating-point) values, but
its bitwise operators operate on 32-bit integers. So, before any
bitwise operation begins, values are converted to 32-bit integer
format.
For the expressions below, indicate the results in binary,
hexadecimal and decimal notations:
􀀀 Bitwise AND
0b010101 & 0b011011157 & 870b01101001 & 0b000110000xBABE &
0xBEEF
􀀀 Bitwise OR
0b010101 | 0b011011157 | 870b01101001 | 0b000110000xBABE |
0xBEEF
􀀀 Bitwise NOT
~0b010101~0b0110111~5787~0b01101001~0b00011000~0xBABE
~0xBEEF
Chapter 18 – Bit Arthmetic
Bitwise Operators, Part 2
After & (bitwise AND), | (bitwise OR), and ~ (bitwise NOT), here are
other important bitwise operators.
The bitwise XOR (exclusive or) operator is ^. It operates on
two numbers and compares them, one bit at a time. If the bits
are different than each other, then that bit in the result is set to
1, otherwise it is set to 0. It does this for each bit in the two
operands. Example:
0b10101010 ^ 0b01100110 = 0b11001100.
The bitwise LSL (shift left) operator is <<. It operates on two
numbers and shifts the bits in the first number to the left; the
second number indicates the number of places by which to shift
the number. Numbers are treated as 32-bit integers; with each
shift the most-significant bit (bit 31) is lost, and a value of 0
shifts into the least-significant binary digit (bit 0). Example:
0b11110111000000001111000011001010 << 3 = 0b10111000000001111000011001010000.
The bitwise LSR (logical shift right) operator is >>> (yes, three
> symbols not two). It operates on two numbers, shifting the
first number to the right by the number of bits indicated by the
second number. Numbers are treated as 32-bit ints; with each
shift the number loses its least-significant bit (bit 0), and 0 shifts
into the most-significant binary digit (bit 31). Example:
0b1111110000111000011001010 >>> 3 = 0b0001111110000111000011001.
Important Note: JavaScript’s ASR (arithmetic shift right)
operator >> is identical to >>> in every way except that when
shifting right, the most-significant binary digit (bit 31) is used to
fill in the new leftmost digits, instead of a zero being used. For
our purposes, >>> is much more useful than >>. Example:
0b1111110000111000011001010 >> 3 = 0b1111111110000111000011001.
For the operations below, indicate the results in binary,
hexadecimal and decimal notations:
􀀀 Bitwise XOR
0b010101 ^ 0b011011157 ^ 870b01101001 ^ 0b00011000
0x0BADCACA ^ 0xD00DAD0xCAFED00D ^ 0xDECAF123 ^
124
􀀀 Bitwise LSL
0b010101 << 757 << 80b01101001 << 0b00000111
0xF00D << 0xA0x000BABEE << 0b142 << 0xA
􀀀 Bitwise LSR
0b0101010101 >>> 7157 >>> 30b10110100101010011 >>> 15
0b00011000 >>> 20xDEADBEEF >>> 0xA0xCAFEBABE >>>
0b11
􀀀 Count in Binary
Given integer representing the number of bits, recursively print
strings that count, in binary representation, from 0 up to the max
number representable by that number of bits.
Chapter 18 – Bit Arthmetic
Bit Shifting and Masking
To save space, you can encode numbers into large containers, by
shifting values into different sections of the container. Example: leftshift
0x1CED by sixteen (<< 16) to 0x1CED0000, leaving space for
another 16-bit num. Combine these using |, like so: (0x1CED << 16) |
0xF00D == 0x1CEDF00D.
Sometimes bits in a number represent 32 independent ON/OFF
states (such as the Yes/No votes of 32 people, or the current
settings of 32 light switches in your house). This can be much more
convenient than storing each of the 32 values individually, as long as
we can manipulate each bit separately.
Thinking about our bitwise operators, every bit can be set by using a
combination of | and <<. To set bits 17 and 18 but keep the rest of
the variable untouched, we could val |= (0x3 << 17). Those bits might
have previously been 0 or 1, but now they are 1 (because any value
OR 1 becomes 1).
On the flip side, we may want to clear a certain bit. In that case, we
take advantage of the fact that any value AND 0 becomes 0. If we
don’t want to affect the rest of the variable when we clear that bit,
then we must AND it with a very specific bit mask. This bit mask
should have a value of all-ones, except for the one bit we want
cleared. The ~ operator flips every bit value, making bit masks easy
to create. To clear bit 12, but keep the rest of the variable untouched,
we could val &= ~(1 << 12). The (1 << 12) creates a positive mask so
to speak, and the ~ turns it into a negative mask. Our variable might
previously have had a 0 or a 1 at bit 12, but now it is 0.
Using what we’ve learned earlier, solve these bit-related challenges
today:
􀀀 Count Set Bits
Given integer, return how many bits are set to 1. For an input of 1023
(0x3FF), return 10. Given the value 8192 (0x2000), return 1.
Second: can you make it O(s), where s is the number of set bits?
􀀀 Encode Bytes to 32
Given four values between 0-255, encode them into a 32-bit integer.
First should map to most significant 8 bits. Given [0xF0, 0xC3, 0x96,
0x59], return 4039349849 (0xF0C39659).
􀀀 Reverse Bits
Given a 32-bit unsigned integer, reverse its bits and return this value.
If you are given the value 0b01100110011001101111000011110000, then
your function should return the value
0b00001111000011110110011001100110.
􀀀 Decode 32 to Bytes
Given 32-bit integer, return a set of values for the four bytes in the
integer. Given 306542763 (which in hex is 0x124578AB), return [0x12,
0x45, 0x78, 0xAB].
􀀀 Byte Array
With encode/decode you’ve written above, create a ByteArray data
structure to store 8-bit values encoded into 32-bit ints to save space.
Build set(index, value) and get(index).
Chapter 18 – Bit Arthmetic
􀀀 Encode Bit Num
Given bit val, bit number, and 32-bit val, mask bit into 32-bit val and
return new val. For (1,22,1) return 0x400001; for (0,3,0x18) return
0x10.
􀀀 Bit Array
With encode/decode functions you’ve written above, create a
BitArray class that stores 1-bit values encoded into 32-bit integers.
Include methods set(index,val) and get(index).
􀀀 Decode Bit Num
Given bit number and 32-bit value, return val of referenced bit
number. For(30,0x4FFFFFFF), return 1. For (3,0x4FFFFFF7), return
0.
􀀀 Radix Sort2
Implement RadixSort, based on powers of two instead of digit
numerals 0-9. Sort by lowest significant bit, then next least significant
bit, etc. What is the big-O runtime to sort 32-bit integers?
􀀀 Sprinklers
The Rockefeller country estate is watered by a 28-head sprinkler
system. Create a function to return a 28-bit number; a landscape
microcontroller calls the function each minute to determine which
heads to enable. Only one sprinkler can run at a time; each runs 20
minutes a day. Four global variables alter system behavior, in
increasing priority: RAIN_SENS is a precipitation meter – if true,
disable all heads. SENS_OVERRIDE, if true, disables the
precipitation meter. While SYS_TEST is true, cycle through all 28
sprinklers for 1 minute each. Finally, if SYS_DISABLE is true, turn off
all sprinklers.
􀀀 LED Encoding
Classic LEDs have seven segments that are individually
turned on or off to produce the desired letter or numeral,
arranged as in diagram at right. Each segment’s on/off
state will be determined by a different bit in a container
byte (bits numbered at right). Value 0x7B signifies that segments
[0,1,3,4,5,6] would be enabled, which would display numeral ‘6’. Build
function LED2Numeral(ledByte) that accepts a byte representing the
states of LED segments in one base-10 numeral, returning the
numerical value of that base-10 numeral (i.e. 0-9). Given the input 36
(0x24, segments 2 & 5), return 1.
Second: create function Int2LED(value) that accepts a 16-bit integer
value and translates it into the values needed to produce the
corresponding LED readout in base-10. The function should return
an array of five bytes: each byte representing one of the numerals
from least-significant to most-significant. Using our examples above,
LEDBytes(85210) == [0,36,93,107,127].
􀀀 Where’s the Bug? (bitwise operators version)
// How many bugs can you find?
function numSetBits(num) { // count num of set bits in a 64-bit val
while (num) { bitCount = bitCount + num && 0x1; num = num
>> 1; }
return bitCount;
}