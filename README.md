# Settlement Negotiation App

This is a simple settlement negotiation application built with Next.js and Redux Toolkit. The application allows two parties, Party A and Party B, to negotiate settlement amounts, handle disputes, and agree on settlements. Real-time updates are managed using `localStorage`.

## Features

- Party A can submit a settlement amount.
- Party B can view the settlement amount, agree, or dispute the settlement.
- Party A receives notifications to reload the page when Party B makes any changes to the settlement status.
- The settlement process can be restarted by either party.
- Real-time state synchronization using `localStorage`.

## Solution Explanation

[Loom video to explain the solution](https://www.loom.com/share/a16658a19cc94e0d9e9ad800d0ba3919?sid=b23eadca-944e-44e4-9f8d-b3efab66fca8)

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (>= 14.x used: 20.4.0)
- npm or yarn or pnpm

### Installation

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Application

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `app/`: Contains the page components for Party A and Party B.
- `store/`: Contains the Redux store configuration and slices.
- `components/`: Contains reusable React components.
- `core/`: Contains core utils or bootstrap constants.

## Main Files Overview

### `store/features/settlement-slice.ts`

Defines the Redux slice for managing settlement states, including actions for setting amounts, toggling visibility, agreeing, disputing, loading from `localStorage`, and resetting the settlement.

### `app/party-a.tsx`

Party A's interface for submitting settlement amounts and receiving notifications about changes made by Party B.

### `app/party-b.tsx`

Party B's interface for viewing, agreeing, or disputing settlement amounts, and notifying Party A about changes.

## Usage

### Party A

1. Submit a settlement amount.
2. Receive a notification to reload the page when Party B responds.
3. Restart the settlement process if needed.

### Party B

1. View the settlement amount submitted by Party A.
2. Agree or dispute the settlement amount.
3. Restart the settlement process if needed.
