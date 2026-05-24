import blessed from 'blessed';
import contrib from 'blessed-contrib';

export const renderDashboard = (options) => {
  const screen = blessed.screen({
    smartCSR: true,
    title: 'gh-insight Dashboard'
  });

  const grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });

  // Add a line chart for follower growth
  const line = grid.set(0, 0, 6, 6, contrib.line, {
    style: { line: 'yellow', text: 'green', baseline: 'black' },
    xLabelPadding: 3,
    xPadding: 5,
    showLegend: true,
    wholeNumbersOnly: false,
    label: 'Follower Growth'
  });

  const series1 = {
    title: 'Followers',
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    y: [1000, 1050, 1100, 1120, 1180, 1245]
  };
  
  line.setData([series1]);

  // Add a map or other widget here (e.g., repo activity)
  const map = grid.set(0, 6, 6, 6, contrib.map, {
    label: 'Contributor Locations'
  });
  
  map.addMarker({"lon" : "-79.0000", "lat" : "38.5000", color: "red", char: "X" });

  // Add a log widget for events
  const log = grid.set(6, 0, 6, 12, contrib.log, {
    fg: "green",
    selectedFg: "green",
    label: 'Activity Log'
  });
  
  log.log("Initializing GitHub insight dashboard...");
  log.log(`Target: ${options.repo || 'Global Stats'}`);

  // Exit keys
  screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });

  screen.render();
};
