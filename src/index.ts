/* Todoist Namespace */
export namespace Todoist {
    export type EventName =
        | 'item:updated'
        | 'item:completed'
        | 'item:uncompleted'
        | 'item:deleted'
        | 'item:added'
        | 'note:added'
        | 'note:updated'
        | 'note:deleted'
        | 'label:added'
        | 'label:updated'
        | 'label:deleted';

    export interface Task {
        id: string;
        content: string;
        description: string;
        due: {
            date: string;
            timezone: string | null;
        } | null;
        is_deleted: boolean;
        url: string;
        completed_at: string;
        duration?: { amount: number; unit: 'minute' | 'day' } | null;
        priority?: number | null;
    }

    export interface WebhookPayload {
        event_name: EventName;
        event_data: Task;
    }
}

/* Notion namespace */
export namespace Notion {
    export interface User {
        object: 'user';
        id: string;
    }

    export interface Parent {
        type: 'database_id';
        database_id: string;
    }

    export interface Annotations {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    }

    export interface Text {
        content: string;
        link?: { url: string } | null;
    }

    export interface RichTextItem {
        type: 'text';
        text: Text;
        annotations?: Annotations;
        plain_text?: string;
        href?: string | null;
    }

    export interface DateObject {
        start: string;
        end?: string | null;
        time_zone?: string | null;
    }

    // Interfaces for different property types
    export interface TitleProperty {
        title?: RichTextItem[];
        id?: 'title';
        type: 'title';
    }

    export interface RichTextProperty {
        id?: string;
        type?: 'rich_text';
        rich_text: RichTextItem[] | [];
    }

    export interface LastEditedTimeProperty {
        id?: string;
        type: 'last_edited_time';
        last_edited_time: string;
    }

    export interface CreatedTimeProperty {
        id?: string;
        type: 'created_time';
        created_time: string;
    }

    export interface URLProperty {
        id?: string;
        type?: 'url';
        url: string | null;
    }

    export interface DateProperty {
        id?: string;
        type?: 'date';
        date: DateObject | null;
    }

    export interface StatusProperty {
        id?: string;
        type?: 'status';
        status: {
            id?: string;
            name: string;
            color?: string;
        } | null;
    }

    export interface SelectProperty {
        id?: string;
        type?: 'select';
        select: {
            id?: string;
            name: string;
            color?: string;
        } | null;
    }

    export interface PeopleProperty {
        id?: string;
        type: 'people';
        people: User[];
    }

    export interface RelationProperty {
        id?: string;
        type: 'relation';
        relation: { id: string }[];
        has_more: boolean;
    }

    export interface ButtonProperty {
        id?: string;
        type: 'button';
        button: {};
    }

    export interface FormulaProperty {
        id?: string;
        type: 'formula';
        formula:
            | { type: 'string'; string: string | null }
            | { type: 'number'; number: number | null }
            | { type: 'boolean'; boolean: boolean }
            | { type: 'date'; date: DateObject | null };
    }

    export interface DatabaseProperties {
        [key: string]:
            | TitleProperty
            | RichTextProperty
            | LastEditedTimeProperty
            | CreatedTimeProperty
            | URLProperty
            | DateProperty
            | StatusProperty
            | SelectProperty
            | PeopleProperty
            | RelationProperty
            | ButtonProperty
            | FormulaProperty
            | undefined;
    }

    export interface Database {
        object: 'database';
        id: string;
        created_time: string;
        last_edited_time: string;
        title: RichTextItem[];
        description: RichTextItem[];
        properties: DatabaseProperties;
        parent: Parent;
        url: string;
        archived: boolean;
    }

    // Interface for the overall Notion page object
    export namespace API {
        export interface PageResponse {
            object: 'page';
            id: string;
            created_time: string;
            last_edited_time: string;
            created_by: User;
            last_edited_by: User;
            cover: any | null;
            icon: any | null;
            parent: Parent;
            archived: boolean;
            in_trash: boolean;
            properties: DatabaseProperties;
            url: string;
            public_url: string | null;
            request_id: string;
        }

        // Interfaces for API request bodies
        export interface RequestBody {
            parent?: { database_id: string };
            properties: Partial<DatabaseProperties>;
        }

        export interface DatabaseResponse extends Database {}

        export interface QueryResponse {
            object: 'list';
            results: PageResponse[];
            next_cursor: string | null;
            has_more: boolean;
        }
    }
}
