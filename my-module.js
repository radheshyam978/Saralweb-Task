/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */
function mergeTimeRanges(ranges, threshold) {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  const sorted = ranges.slice().sort((a, b) => a[0] - b[0]);
  const merged = [];
  let [currentStart, currentEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [nextStart, nextEnd] = sorted[i];
    if (nextStart <= currentEnd || nextStart - currentEnd <= threshold) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      merged.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }

  merged.push([currentStart, currentEnd]);
  return merged;
}


module.exports = { mergeTimeRanges };
