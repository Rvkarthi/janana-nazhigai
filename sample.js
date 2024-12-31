function findNavamsaLagna(raasiLagna, natchathiram, patham) {
  // Define the Navamsa progression order (zodiac sequence for Navamsa)
  const navamsaOrder = [
    "மேஷம்", "விருச்சிகம்",
    "துலாம்", "மகரம்",
    "கன்னி", "கும்பம்",
    "சிம்மம்", "மீனம்",
    "கடகம்", "தனுசு",
    "மிதுனம்", "ரிஷபம்"
  ];

  // Define starting indices for each Raasi in the Navamsa cycle
  const raasiStartIndex = {
    "மேஷம்": 0,
    "ரிஷபம்": 9,
    "மிதுனம்": 18,
    "கடகம்": 27,
    "சிம்மம்": 36,
    "கன்னி": 45,
    "துலாம்": 54,
    "விருச்சிகம்": 63,
    "தனுசு": 72,
    "மகரம்": 81,
    "கும்பம்": 90,
    "மீனம்": 99
  };

  // Natchathiram Patham base Navamsa offset
  const natchathiramBase = {
    "அஸ்வினி": 0, "பரணி": 4, "கார்த்திகை": 8,
    "ரோஹினி": 12, "மிருகசீரிடம்": 16,
    "திருவாதிரை": 20, "புனர்பூசம்": 24,
    "பூசம்": 28, "ஆயில்யம்": 32,
    "மகம்": 36, "பூரம்": 40, "உத்திரம்": 44,
    "அஸ்தம்": 48, "சித்திரை": 52, "ஸ்வாதி": 56,
    "விசாகம்": 60, "அனுஷம்": 64, "கேட்டை": 68,
    "மூலம்": 72, "பூராடம்": 76, "உத்திராடம்": 80,
    "திருவோணம்": 84, "அவிட்டம்": 88,
    "சதயம்": 92, "பூரட்டாதி": 96, "உத்திரட்டாதி": 100,
    "ரேவதி": 104
  };

  // Validate inputs
  if (!raasiStartIndex[raasiLagna]) {
    return "Invalid Raasi Lagna. Please provide a valid Raasi name.";
  }

  if (!natchathiramBase[natchathiram]) {
    return "Invalid Natchathiram. Please provide a valid Natchathiram name.";
  }

  if (patham < 1 || patham > 4) {
    return "Invalid Patham. Patham should be between 1 and 4.";
  }

  // Calculate the Navamsa index
  const baseNavamsaIndex = natchathiramBase[natchathiram] + (patham - 1);
  const navamsaPosition = (raasiStartIndex[raasiLagna] + baseNavamsaIndex) % 108;

  // Determine the Navamsa Lagna
  const navamsaLagna = navamsaOrder[Math.floor(navamsaPosition / 9)];

  return navamsaLagna;
}

// Example usage
const raasiLagna = "ரிஷபம்"; // Input Raasi Lagna
const natchathiram = "கார்த்திகை"; // Input Natchathiram
const patham = 4; // Input Patham

console.log(findNavamsaLagna(raasiLagna, natchathiram, patham)); // Output: Calculated Navamsa Lagna
