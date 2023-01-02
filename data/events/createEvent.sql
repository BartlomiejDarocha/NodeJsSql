INSERT INTO [dbo].[events]
(
  [eventTitle],
  [eventDescription],
  [startDate],
  [endDate],
  [aveneu],
  [maxMembers]
)
VALUES (
  @eventTitle,
  @eventDescription,
  @startDate,
  @endDate,
  @aveneu,
  @maxMembers
)
SELECT SCOPE_IDENTITY() AS eventId
