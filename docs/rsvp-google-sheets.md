# Connect RSVP replies to Google Sheets

The RSVP page sends replies to the site’s private API route. A small Google Apps Script receives them and adds each reply to an `RSVP` tab in your spreadsheet. The sheet URL and shared secret stay in server-side environment settings; they are never sent to visitors’ browsers.

## 1. Create the spreadsheet endpoint

1. Create or open the Google Sheet where you want to manage replies.
2. In that sheet, choose **Extensions → Apps Script**.
3. Replace the starter contents of `Code.gs` with the code in [`scripts/rsvp/Code.gs`](../scripts/rsvp/Code.gs), then save it.
4. In Apps Script, open **Project Settings → Script properties** and add these two properties:
   - `RSVP_SHARED_SECRET` — a long, randomly generated value. Keep it private.
5. Choose **Deploy → New deployment**, select **Web app**, set **Execute as** to **Me**, and set access to **Anyone**. Deploy and approve Google’s authorization prompts.
6. Copy the web app URL ending in `/exec`. Visiting it should display a short “endpoint is ready” message.

The script is bound to this spreadsheet and creates an `RSVP` tab and its column headings the first time it saves a reply. It does not open other spreadsheets.

## 2. Add the two server settings

In the Vercel project, open **Settings → Environment Variables** and add:

- `GOOGLE_SHEETS_RSVP_URL` — the deployed Apps Script `/exec` URL.
- `GOOGLE_SHEETS_RSVP_SECRET` — the exact same private value as `RSVP_SHARED_SECRET` above.

Enable these for Production. Enable Preview too if you want to test RSVP submissions on preview deployments. Redeploy after saving the settings.

For local testing, put the same two values in `.env.local` at the project root. That file is ignored by Git; do not commit it or share the secret in chat.

## 3. Verify a reply

After the environment settings are applied, submit a test reply on `/rsvp` and confirm a new row appears in the spreadsheet’s `RSVP` tab. Replies include the submission time, name, email, phone, attendance response, party size, and optional note. The form accepts up to 10 people in one party; declining replies are recorded with a party size of zero.

If the site settings are not configured yet, the form reports that it is not connected and does not claim to have saved the reply.

Because the sheet contains guests’ contact details, share the spreadsheet only with people helping manage the event.
