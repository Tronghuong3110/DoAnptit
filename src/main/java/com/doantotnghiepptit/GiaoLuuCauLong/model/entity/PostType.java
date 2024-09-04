package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import javax.lang.model.element.Name;

@Data
@Entity
@Table(name = "post_type")
public class PostType {
    @Id
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
}
