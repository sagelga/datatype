# sagelga-datatype

A collection of TypeScript data types for various APIs.

## Currently Supported APIs

-   Todoist
-   Notion

## Installation

```bash
npm install sagelga-datatype
```

## Usage

```typescript
import { Todoist, Notion } from 'sagelga-datatype';

// Example usage for Todoist types
const todoistTask: Todoist.Task = {
    id: '123',
    content: 'Buy milk',
    description: '',
    due: null,
    is_deleted: false,
    url: 'https://todoist.com/showTask?id=123',
    completed_at: null,
};

// Example usage for Notion types
const notionPage: Notion.API.PageResponse = {
    object: 'page',
    id: '123',
    created_time: '2022-01-01T00:00:00.000Z',
    last_edited_time: '2022-01-01T00:00:00.000Z',
    created_by: { object: 'user', id: '456' },
    last_edited_by: { object: 'user', id: '456' },
    cover: null,
    icon: null,
    parent: { type: 'database_id', database_id: '789' },
    archived: false,
    in_trash: false,
    properties: {
        /* ... */
    },
    url: 'https://www.notion.so/page-id',
    public_url: null,
    request_id: 'abc-123',
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
