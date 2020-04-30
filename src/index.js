import colors from "./colors.json";
/**
 * Parses a minecraft chat packet to a string.
 * @param {Object} packet - Packet.
 * @returns {String} - Parsed string
 */
export const parse = (packet) => {
  let desc = "";
  if (packet.text) {
    desc += packet.text;
  }
  if (packet.extra) {
    packet.extra.forEach((element) => {
      if (element.obfuscated) {
        desc += "§k";
      }
      if (element.bold) {
        desc += "§l";
      }
      if (element.strikethrough) {
        desc += "§m";
      }
      if (element.underline) {
        desc += "§n";
      }
      if (element.italic) {
        desc += "§o";
      }
      if (element.reset) {
        desc += "§r";
      }
      if (colors[element.color]) {
        desc += `§${colors[element.color]}${element.text}`;
      } else {
        desc += element.text;
      }
    });
  }
  return desc;
};
/**
 * Removes minecraft colors from a string.
 * @param {String} - String to remove colors from
 * @returns {String} - String with removed colors
 */
export const removeColors = (string) => {
  const regex = /\u00A7[0-9A-FK-OR]/gi;
  return string.replace(regex, "");
};
