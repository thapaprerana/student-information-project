"use client";

import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface Student {
  id: string;
  name: string;
  program: string;
  year: string;
}

// Mock data - swap this array for data from your database or API later.
const STUDENTS: Student[] = [
 { id: "ABC-2083-001", name: "Anish Gurung", program: "BICTE", year: "1st sem" },
{ id: "ABC-2081-002", name: "Sunita Thapa", program: "BBA", year: "3rd sem" },
{ id: "ABC-2081-003", name: "Rajan Poudel", program: "B.Ed Math", year: "2nd Year" },
{ id: "ABC-2081-004", name: "Kamala Adhikari", program: "B.Ed English", year: "4th Year" },
{ id: "ABC-2081-005", name: "Bishal Shrestha", program: "B.Ed Nepali", year: "1st Year" },
{ id: "ABC-2081-006", name: "Nisha Rana", program: "B.Ed Science", year: "2nd Year" },
{ id: "ABC-2081-007", name: "Prakash Bhandari", program: "BA", year: "3rd Year" },
{ id: "ABC-2081-008", name: "Sarita Karki", program: "BBS", year: "1st Year" },
{ id: "ABC-2081-009", name: "Bikal Shrestha", program: "BICTE", year: "4th sem" },
{ id: "ABC-2081-010", name: "Manisha Pandey", program: "BBA", year: "4th sem" },
{ id: "ABC-2081-011", name: "Suresh Gautam", program: "B.Ed Math", year: "1st Year" },
{ id: "ABC-2081-012", name: "Puja Regmi", program: "BA", year: "2nd Year" },

{ id: "ABC-2080-005", name: "Bidika Shrestha", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-006", name: "Binita Shrestha", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-002", name: "Anita Adhikari", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-014", name: "Mandira Kunwar", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-018", name: "Nisha Giri", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-019", name: "Prerana Thapa", program: "BICTE", year: "6th sem" },
{ id: "ABC-2080-017", name: "Nabaraj Thapa", program: "BICTE", year: "6th sem" },

{ id: "ABC-2083-BBS080", name: "Aayush Khatri",   program: "BICTE", year: "6th sem" },
{ id: "ABC-2083-BBS071", name: "Manju Shrestha",  program: "BBS", year: "1st year" },
{ id: "ABC-2079-BBS072", name: "Sabin Thapa",     program: "BBS", year: "4rth year" },
{ id: "ABC-2081-BBS088", name: "Rabin Mahat",     program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS018", name: "Abin Shrestha",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS008", name: "Sonisha Giri",    program: "BBS", year: "3rd year" },
{ id: "ABC-2083-BBS081", name: "Ranjita Ale",     program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS058", name: "Kalpana Shrestha",program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS089", name: "Anjila Gurung",   program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS098", name: "Neha Shah",       program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS012", name: "Ranjan Malla",    program: "BBS", year: "2nd year" },
{ id: "ABC-2079-BBS036", name: "Sabin Karmacharya", program: "BBS",year:"4rth year" },

{ id: "ABC-2081-BBS069", name: "Sanjeet Basnet", program: "BBS", year: "3rd year" },
{ id: "ABC-2083-BBS070", name: "Rabin Aryal",    program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS071", name: "Haei Adhikari",  program: "BBS", year: "2nd year" },
{ id: "ABC-2083-BBS082", name: "Reshab Koirala", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS083", name: "Sanjana Sharma", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS084", name: "Aakash BK",      program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS085", name: "Sushmita KC",    program: "BBS", year: "1st year" },
{ id: "ABC-2082-BBS086", name: "Kiran Magar",    program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS087", name: "Asmita Rai",     program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS090", name: "Dipesh Shrestha",program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS091", name: "Suman Lama",     program: "BBS", year: "2nd year" },
{ id: "ABC-2081-BBS092", name: "Roshani Khatri", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS093", name: "Bibek Gautam",   program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS094", name: "Prabina Poudel", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS095", name: "Anil Bohara",    program: "BBS", year: "3rd year" },
{ id: "ABC-2079-BBS096", name: "Ramesh Oli",     program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS097", name: "Sita Karki",     program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS099", name: "Anjeet Gurung",   program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS0100", name: "Kabin Bista",   program: "BBS", year: "4th year" },
{ id: "ABC-2083-BBS101", name: "kanju Gautam", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS102", name: "Ritika Khadka", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS103", name: "Sujan Karki", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS104", name: "Alisha Thapa", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS105", name: "Prabin Sharma", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS106", name: "Sneha Poudel", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS107", name: "Ritesh Bhandari", program: "BBS", year: "1st year" },
{ id: "ABC-2083-BBS108", name: "Anusha Koirala", program: "BBS", year: "1st year" },

{ id: "ABC-2082-BBS109", name: "Nabin Adhikari", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS110", name: "Sushil Dahal", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS111", name: "Bipana Oli", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS112", name: "Roshan Magar", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS113", name: "Anita KC", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS114", name: "Kamal Ghimire", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS115", name: "Pabitra Rijal", program: "BBS", year: "2nd year" },
{ id: "ABC-2082-BBS116", name: "Nirajan Bhattarai", program: "BBS", year: "2nd year" },

{ id: "ABC-2081-BBS117", name: "Bikash Kandel", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS118", name: "Asmita Adhikari", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS119", name: "Pratiksha Neupane", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS120", name: "Rupesh Kharel", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS121", name: "Manisha Kafle", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS122", name: "Suman Adhikari", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS123", name: "Kushal Acharya", program: "BBS", year: "3rd year" },
{ id: "ABC-2081-BBS124", name: "Roshni Bista", program: "BBS", year: "3rd year" },

{ id: "ABC-2079-BBS125", name: "Dipendra Joshi", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS126", name: "Bhawana Tamang", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS127", name: "Rajan Basnet", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS128", name: "Rajni Shahi", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS129", name: "Birkha Maharjan", program: "BBS", year: "4th year" },
{ id: "ABC-2079-BBS130", name: "Rupak Pariyar", program: "BBS", year: "4th year" },





  { id: "ABC-2083-001", name: "Anish Gurung", program: "BICTE", year: "1st sem" },
  { id: "ABC-2081-002", name: "Sunita Thapa", program: "BBA", year: "3rd sem" },
  { id: "ABC-2081-003", name: "Rajan Poudel", program: "B.Ed Math", year: "2nd Year" },
  { id: "ABC-2081-004", name: "Kamala Adhikari", program: "B.Ed English", year: "4th Year" },
  { id: "ABC-2081-005", name: "Bishal Shrestha", program: "B.Ed Nepali", year: "1st Year" },
  { id: "ABC-2081-006", name: "Nisha Rana", program: "B.Ed Science", year: "2nd Year" },
  { id: "ABC-2081-007", name: "Prakash Bhandari", program: "BA", year: "3rd Year" },
  { id: "ABC-2081-008", name: "Sarita Karki", program: "BBS", year: "1st Year" },
  { id: "ABC-2081-009", name: "Samikshya Shrestha", program: "BICTE", year: "4th sem" },
  { id: "ABC-2081-010", name: "Manisha Pandey", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-011", name: "Suresh Gautam", program: "B.Ed Math", year: "1st Year" },
  { id: "ABC-2081-012", name: "Puja Regmi", program: "BA", year: "2nd Year" },
  { id: "ABC-2080-BICTE005", name: "Bidika Shrestha", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-006", name: "Binita Shrestha", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-002", name: "Anita Adhikari", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-014", name: "Mandira Kunwar", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-018", name: "Nisha Giri", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-019", name: "Prerana Thapa", program: "BICTE", year: "6th sem" },
  { id: "ABC-2080-017", name: "Nabaraj Thapa", program: "BICTE", year: "6th sem" },
  { id: "ABC-2079-001",  name: "Roshni Rana", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-002",  name: "Monika Kumal", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-003",  name: "Prerita Parajuli", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-004",  name: "Ranjana BK", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-005",  name: "Dipika Giri", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-006",  name: "Manjil Ale", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-007",  name: "Maya Rana", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-008",  name: "Suman Thapa", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-009",  name: "Anisha Gurung", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-010",  name: "Ritika Sharma", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-011",  name: "Kiran Chaudhary", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-012",  name: "Asmita Karki", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-013",  name: "Bipin Rai", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-014",  name: "Sujan Magar", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-015",  name: "Nisha Tamang", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-016",  name: "Roshan BK", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-017",  name: "Pooja Shrestha", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-018",  name: "Aayush Adhikari", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-019",  name: "Sanjana Oli", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-020",  name: "Ramesh Bohara", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-021",  name: "Kabita Basnet", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-022",  name: "Prakash Khadka", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-023",  name: "Sabina Rana", program: "BBA", year: "8th sem" },
  { id: "ABC-2079-024",  name: "Niraj Gautam", program: "BBA", year: "8th sem" },

  { id: "ABC-2080-001", name: "Aarav Shrestha", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-002", name: "Sushmita Rana", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-003", name: "Bibek Thapa", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-004", name: "Anjali Karki", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-005", name: "Rohan Gurung", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-006", name: "Puja Basnet", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-007", name: "Nirajan Rai", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-008", name: "Asmita Thapa", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-009", name: "Sujal Adhikari", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-010", name: "Ritika Magar", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-011", name: "Kushal BK", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-012", name: "Manisha Oli", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-013", name: "Prabin Chaudhary", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-014", name: "Sabina Gurung", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-015", name: "Aayusha Sharma", program: "BBA", year: "6th sem" },
  { id: "ABC-2080-016", name: "Roshan Tamang", program: "BBA", year: "6th sem" },

  { id: "ABC-2081-001", name: "Aarushi Karki", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-002", name: "Suman Rai", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-003", name: "Ritika Thapa", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-004", name: "Bibek Gurung", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-005", name: "Asmita Basnet", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-006", name: "Sujal Sharma", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-007", name: "Pooja Rana", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-008", name: "Niraj Thapa", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-009", name: "Anisha Magar", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-010", name: "Roshan BK", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-011", name: "Sanjana Oli", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-012", name: "Prakash Adhikari", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-013", name: "Kabita Chaudhary", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-014", name: "Ramesh Tamang", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-015", name: "Aayusha Shrestha", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-016", name: "Bikash Rana", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-017", name: "Manisha Gurung", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-018", name: "Suresh Karki", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-019", name: "Nisha Rai", program: "BBA", year: "4th sem" },
  { id: "ABC-2081-020", name: "Kushal Basnet", program: "BBA", year: "4th sem" },

  { id: "ABC-2082-001", name: "Aayush Karki", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-002", name: "Sanjana Rai", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-003", name: "Bibek Thapa", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-004", name: "Anisha Gurung", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-005", name: "Rohan Basnet", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-006", name: "Pooja Sharma", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-007", name: "Nirajan Magar", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-008", name: "Asmita Rana", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-009", name: "Sujal Adhikari", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-010", name: "Ritika BK", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-011", name: "Kushal Oli", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-012", name: "Manisha Chaudhary", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-013", name: "Prabin Tamang", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-014", name: "Sabina Karki", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-015", name: "Aarushi Shrestha", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-016", name: "Roshan Gurung", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-017", name: "Nisha Basnet", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-018", name: "Bikash Rai", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-019", name: "Sushmita Thapa", program: "BBA", year: "2nd sem" },
  { id: "ABC-2082-020", name: "Prakash Shrestha", program: "BBA", year: "2nd sem" },

  { id: "ABC-2083-001", name: "Aarav Karki", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-002", name: "Sushmita Rai", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-003", name: "Bibek Shrestha", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-004", name: "Anjali Gurung", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-005", name: "Rohan Basnet", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-006", name: "Puja Thapa", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-007", name: "Nirajan Sharma", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-008", name: "Asmita Magar", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-009", name: "Sujal Rana", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-010", name: "Ritika BK", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-011", name: "Kushal Adhikari", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-012", name: "Manisha Oli", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-013", name: "Prabin Chaudhary", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-014", name: "Sabina Tamang", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-015", name: "Aayusha Karki", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-016", name: "Roshan Gurung", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-017", name: "Nisha Basnet", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-018", name: "Bikash Rai", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-019", name: "Sanjana Shrestha", program: "BBA", year: "1st sem" },
  { id: "ABC-2083-020", name: "Prakash Rana", program: "BBA", year: "1st sem" },
  

  
   { id: "ABC-2083-BA01",  name: "Roshan Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA02",  name: "Suman Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA03",  name: "Asmita Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA04",  name: "Lily Shrestha", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA05",  name: "Rishi Ram Bhattrai", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA06",  name: "Hari Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA07",  name: "Uma Chettri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA08",  name: "Ritesh khanal", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA09",  name: "Atisha Kunwar", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA010",  name: "lalita Thakuri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA011",  name: "Babin Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA012",  name: "Binita Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA013",  name: "Ganga Adhikari", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA014",  name: "Bishnu Lamichane", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA015",  name: "Om Kumar Shrestha", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA016",  name: "Ati Rana", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA017",  name: "Reshma Oli", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA018",  name: "Priya Ale", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA019",  name: "Ram Kumar Thapa", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA020",  name: "Isha Giri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA021",  name: "Sonisha Chettri", program: "BA", year: "1st year" },
  { id: "ABC-2083-BA022",  name: "Rita Rana", program: "BA", year: "1st year" },
  { id: "ABC-2082-BICTE01", name: "Kastup Thakuri", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE02", name: "Sam Joshi", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE03", name: "Hom Bahadur", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE04", name: "Mohit Joshi", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE05", name: "Sam Bahadur", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE06", name: "Biraj Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE07", name: "Sanjok Thapa", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE08", name: "Alex B.K", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE09", name: "Krishna Thapa", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE010", name: "Kumari Shresta", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE011", name: "Krishna Tamange", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE012", name: "Diwash Thakuri", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE013", name: "Krish Sunar", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE014", name: "Amrit Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE015", name: "Kushal Karki", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE016", name: "Mahesh Shrestha", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE017", name: "Krishna Maya Gurung", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE018", name: "Fulmaya Rai", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE019", name: "Man Maya Bhatrai", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BICTE020", name: "Kiran Bhatrai", program: "BICTE", year: "2nd Sem"},
  { id: "ABC-2082-BA001",  name: "Anisha Rai", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA002",  name: "Ritika Tamang", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA003",  name: "Safal Gurung", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA004",  name: "Satis Kunwar", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA005",  name: "Ishita Gurung", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA006",  name: "Latika Thapa", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA007",  name: "Kismita Giri", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA008",  name: "Aakriti Ale", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA009",  name: "Tika Lal Shrestha", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0010",  name: "Elina Chettri", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0012",  name: "Dinisha Hamal", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0013",  name: "Fija Thapa", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0014",  name: "Alina Bagale", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0015",  name: "Ramila Thapa", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0016",  name: "Gina Tamang", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0017",  name: "Punam Moktan", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0018",  name: "Purna Rai", program: "BA", year: "2nd year" },
  { id: "ABC-2082-BA0019",  name: "Jasita Gurung", program: "BA", year: "2nd year" },
  { id: "ABC-2081-BA001",  name: "Sarita KC", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA002",  name: "Samita Khand", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA003",  name: "Usala thapa", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA004",  name: "Avind Acharya", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA005",  name: "Sumit Thapa", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA006",  name: "Sangam Acharya", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA007",  name: "Anita Thapa", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA008",  name: "Aarati Sharma", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA009",  name: "Loma Rai", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0010",  name: "Merika Ale", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0011",  name: "Erika Sapkota", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0012",  name: "Binisha Hamal", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0013",  name: "Iccha Shah", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0014",  name: "Samikshya Acharya", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0015",  name: "Sabita Kumal", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0016",  name: "Roman Ale", program: "BA", year: "3rd year" },
  { id: "ABC-2081-BA0017",  name: "Sabal Karki", program: "BA", year: "3rd year" },
];

const PROGRAMS = ["All Programs", ...new Set(STUDENTS.map((s) => s.program))];

// Max rows shown per page. Change this single number to show more/fewer.
const PAGE_SIZE = 10;

export default function StudentTable() {
  const [query, setQuery] = useState<string>("");
  const [program, setProgram] = useState<string>("All Programs");
  const [page, setPage] = useState<number>(1);

  // Whenever the search text or program filter changes, jump back to
  // page 1. This is done during render (React's documented pattern for
  // "adjusting state when an input changes") instead of in a useEffect,
  // which avoids an extra render pass.
  const filterKey = `${query}|${program}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setPage(1);
  }

  const filtered = useMemo(() => {
    return STUDENTS.filter((s) => {
      const matchesProgram = program === "All Programs" || s.program === program;
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.id.toLowerCase().includes(query.toLowerCase());
      return matchesProgram && matchesQuery;
    });
  }, [query, program]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Derived instead of stored in state: if filtering shrinks the results
  // below the page you were on, this naturally "snaps back" to the last
  // valid page without needing an extra effect.
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = (currentPage - 1) * PAGE_SIZE + paginated.length;

  return (
    <div>
      {/* Search + filter controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or student ID"
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:w-56"
        >
          {PROGRAMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="min-w-full divide-y divide-gray-100 text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-600">Student ID</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Program</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Year/Semester</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {paginated.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-gray-500">{s.id}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{s.name}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.program}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-600">{s.year}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                  No students match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {filtered.length > 0 && (
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-gray-500">
            Showing {rangeStart}–{rangeEnd} of {filtered.length} students
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            <span className="px-2 text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:bg-gray-50"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
