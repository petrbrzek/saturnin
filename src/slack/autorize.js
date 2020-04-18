const installations = [
  {
    teamId: "T02J7BC6J",
    botToken: process.env.SLACK_BOT_TOKEN,
    botId: "B01004M86AY",
    botUserId: "UV1Q98DNE",
  },
];

module.exports = {
  authorize: async ({ teamId, enterpriseId }) => {
    // Fetch team info from database
    for (const team of installations) {
      // Check for matching teamId and enterpriseId in the installations array
      if (team.teamId === teamId && team.enterpriseId === enterpriseId) {
        // This is a match. Use these installation credentials.
        return {
          // You could also set userToken instead
          botToken: team.botToken,
          botId: team.botId,
          botUserId: team.botUserId,
          teamId: team.teamId,
        };
      }
    }

    throw new Error("No matching authorizations");
  },
};
